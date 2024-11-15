import { Component, Vector2D } from "@/objects/core";

export class Collider extends Component {
  position: Vector2D;
  size: Vector2D;

  constructor(position: Vector2D, size: Vector2D) {
    super();

    this.position = position;
    this.size = size;
  }
}
