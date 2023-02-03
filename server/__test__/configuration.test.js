require("dotenv").config();

test("configuration env variables are being read correctly", () => {
  const MONGO_URI = process.env.MONGO_URI;
  const CLOUD_API_KEY = process.env.CLOUD_API_KEY;

  expect(MONGO_URI).not.toBeNull();
  expect(MONGO_URI).not.toBeUndefined();
  expect(MONGO_URI).toBeDefined();

  expect(CLOUD_API_KEY).not.toBeNull();
  expect(CLOUD_API_KEY).not.toBeUndefined();
  expect(CLOUD_API_KEY).toBeDefined();
});
