import { IsNotEmpty, IsUUID } from "class-validator";
import { Length } from "class-validator/types/decorator/decorators";

export class CreateNotificationBody {
  @IsNotEmpty()
  @IsUUID()
  recipientId: string;

  @IsNotEmpty()
  @Length(5, 255)
  content: string;
  category: string;
}