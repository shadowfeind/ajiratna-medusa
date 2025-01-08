import { Module } from "@medusajs/framework/utils";
import FlashModuleService from "./service";

export const FLASH_MODULE = "flash";

export default Module(FLASH_MODULE, {
  service: FlashModuleService,
});
