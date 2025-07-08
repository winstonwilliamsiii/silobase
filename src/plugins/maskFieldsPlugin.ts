import fp from 'fastify-plugin'
import config from '../config/indexConfig'
function deepMask(obj: any, fieldsToMask: string[]): any {
    if (Array.isArray(obj)) return obj.map((item) => deepMask(item, fieldsToMask));

    if (obj && typeof obj === 'object') {
        return Object.fromEntries(
            Object.entries(obj).map(([key, value]) => {
                const lowerKey = key.toLowerCase();
                return [
                    key,
                    fieldsToMask.includes(lowerKey) ? '******' : deepMask(value, fieldsToMask)
                ];
            })
        );
    }

    return obj;
}

export default fp(async (fastify) => {
    const { maskFields } = { maskFields: config.maskFields };

    fastify.addHook('onSend', async (request, reply, payload) => {
        try {
            const data = JSON.parse(payload as string);
            const masked = deepMask(data, maskFields);
            return JSON.stringify(masked);
        } catch {
            return payload;
        }
    });
});
