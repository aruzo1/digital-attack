import { GameObject } from "@/objects/core";

export class CollisionManager {
  private readonly gameObjects: GameObject[];

  constructor(gameObjects: GameObject[]) {
    this.gameObjects = gameObjects;
  }

  // getCollisions(target: Collider) {
  //   return this._colliders.reduce((collisions, collider) => {
  //     if (target === collider) return collisions;

  //     const contacts = this.calculateContacts(target, collider);

  //     if (contacts.x && contacts.y) {
  //       collisions.push(new Collision(collider, contacts));
  //     }

  //     return collisions;
  //   }, []);
  // }

  // private calculateContacts(c1: Collider, c2: Collider) {
  //   return {
  //     x:
  //       c1.position.x < c2.position.x + c2.size.x &&
  //       c1.position.x + c1.size.x > c2.position.x,
  //     y:
  //       c1.position.y < c2.position.y + c2.size.y &&
  //       c1.position.y + c1.size.y > c2.position.y,
  //   };
  // }
}
