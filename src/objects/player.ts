import { Collider } from "@/objects/collisions";
import { GameObject, Input, Vector2D } from "@/objects/core";

export class Player extends GameObject {
  private readonly collider: Collider;
  private readonly speed = 0.5;

  constructor(collider: Collider) {
    super();

    this.collider = collider;
  }

  update(deltaTime: number): void {
    const direction = new Vector2D(
      Input.getAxis("horizontal"),
      Input.getAxis("vertical")
    ).normalized;

    this.collider.position.translateX(direction.x * this.speed * deltaTime);
    this.collider.position.translateY(direction.y * this.speed * deltaTime);
  }

  draw(context: CanvasRenderingContext2D) {
    context.fillStyle = "red";
    context.fillRect(
      this.collider.position.x,
      this.collider.position.y,
      this.collider.size.x,
      this.collider.size.y
    );
  }
}
