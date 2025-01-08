import { MedusaService } from "@medusajs/framework/utils";
import { Flash } from "./models/flash";

class FlashModuleService extends MedusaService({
  Flash,
}) {}

export default FlashModuleService;
