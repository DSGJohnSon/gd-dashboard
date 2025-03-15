import { Hono } from "hono";
import { Company, User } from "@gd-dashboard/types";

const app = new Hono();

app.get("/", (c) => c.text("Hello, Hono!"));

const newUser: User = {
  id: "123",
  name: "John Doe",
  email: "john@example.com",
};

const newCompany: Company = {
  id: "456",
  name: "Acme Inc",
  address: "123 Main St",
};

export default app;
