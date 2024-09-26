"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.databaseProviders = void 0;
const mongoose = require("mongoose");
const { DB_HOST } = process.env;
exports.databaseProviders = [
    {
        provide: "DATABASE_CONNECTION",
        useFactory: async () => {
            try {
                console.log("DB_HOST:", DB_HOST);
                if (!DB_HOST.startsWith("mongodb://") &&
                    !DB_HOST.startsWith("mongodb+srv://")) {
                    throw new Error("Invalid DB_HOST. It must start with 'mongodb://' or 'mongodb+srv://'.");
                }
                return await mongoose.connect(DB_HOST);
            }
            catch (error) {
                console.error("Database connection error:", error);
                throw error;
            }
        },
    },
];
//# sourceMappingURL=database.providers.js.map