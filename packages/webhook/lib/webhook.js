"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ZeroWebhook = exports.hashWebhookMessage = void 0;
const axios_1 = __importDefault(require("axios"));
const solidity_1 = require("@ethersproject/solidity");
const hashWebhookMessage = (serialized) => (0, solidity_1.keccak256)(['string', 'bytes'], ['/zero/1.1.0/webhook', serialized]);
exports.hashWebhookMessage = hashWebhookMessage;
class ZeroWebhook {
    constructor({ signer, baseUrl, logger }) {
        this.signer = signer;
        this.baseUrl = baseUrl;
        this.logger = logger;
    }
    async send(request) {
        try {
            const serialized = '0x' + request.serialize().toString('hex');
            await axios_1.default.post(this.baseUrl, {
                data: serialized,
                signature: await this.signer.signMessage((0, exports.hashWebhookMessage)(serialized))
            }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
        }
        catch (err) {
            if (this.logger) {
                this.logger.debug(`Webhook Error: ${err}`);
            }
            else {
                console.error(err);
            }
        }
    }
}
exports.ZeroWebhook = ZeroWebhook;
//# sourceMappingURL=webhook.js.map