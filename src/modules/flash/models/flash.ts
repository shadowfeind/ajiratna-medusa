import { model } from "@medusajs/framework/utils";

export const Flash = model.define("flash", {
  id: model.id().primaryKey(),
  heading: model.text(),
});
