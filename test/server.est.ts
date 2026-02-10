// import request, { Response } from "supertest";
// import app from "../src/app";

// import { getPlayerById, getAllPlayersWithCount, getPlayerRatingByPlayerId } from "../src/service/playerService"

// describe("GET /api/v1/health", () => {
//     it("should return server health status", async () => {
//         const response: Response = await request(app).get("/api/v1/health");
//         expect(response.status).toBe(200);
//         expect(response.body.status).toBe("OK");
//         expect(response.body).toHaveProperty("uptime");
//         expect(response.body).toHaveProperty("timestamp");
//         expect(response.body).toHaveProperty("version");
//     });
// });

// describe("GET /api/v1/players", () => {
//     it("should return players with cound", async () => {
//         const response: Response = await request(app).get("/api/v1/players");
//         expect(response.status).toBe(200);
//         expect(response.body).toHaveProperty("players");
//         expect(response.body).toHaveProperty("count");
//         expect(response.body.count).toBe(3);
//     });
// });

// describe("get all polayers with count", () => {
//     it("should return players with count", async () => {
//         var result = getAllPlayersWithCount()
//         expect(result).toHaveProperty("players");
//         expect(result).toHaveProperty("count");
//         expect(result.count).toBe(3);
//     });
// });