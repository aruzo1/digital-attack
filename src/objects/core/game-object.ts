import { Component } from "@/objects/core";

export abstract class GameObject {
  readonly components: Component[] = [];

  update(deltaTime: number): void {}
  fixedUpdate(timeStep: number): void {}
  draw(context: CanvasRenderingContext2D): void {}

  protected addComponent(component: Component) {
    this.components.push(component);
  }

  getComponentsByClass<T extends Component>(
    classType: new (...args: any[]) => T
  ): T[] {
    return this.components.filter(
      (component) => component instanceof classType
    ) as T[];
  }
}
