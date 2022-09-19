"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.zeroWebhookMiddleware = void 0;
const transactions_1 = require("@ethersproject/transactions");
const webhook_1 = require("./webhook");
const deserialize_1 = require("../../request/lib/deserialize");
const zeroWebhookMiddleware = (req, res, next) => {
    return async (req, res, next) => {
        req.signerAddress = (0, transactions_1.recoverAddress)((0, webhook_1.hashWebhookMessage)(req.body.data), req.body.signature);
        req.deserialized = await (0, deserialize_1.deserialize)(req.body.data);
        next();
    };
};
exports.zeroWebhookMiddleware = zeroWebhookMiddleware;
//# sourceMappingURL=middleware.js.map