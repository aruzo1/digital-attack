import {
  DrawFunction,
  FixedUpdateFunction,
  GameLoop,
  UpdateFunction,
  GameObject,
  Vector2D,
} from "@/objects/core";
import { Input } from "@/objects/core/input";
import { Player } from "@/objects/player";
import { Collider } from "./objects/collisions";

const canvas = document.querySelector("#canvas") as HTMLCanvasElement;
const context = canvas.getContext("2d") as CanvasRenderingContext2D;

const player = new Player(new Collider(Vector2D.zero, new Vector2D(30, 30)));
const gameObjects = [player] as GameObject[];

const update = ((deltaTime) => {
  gameObjects.forEach((gameObject) => gameObject.update(deltaTime));
}) satisfies UpdateFunction;

const fixedUpdate = ((timestamp) => {
  gameObjects.forEach((gameObject) => gameObject.fixedUpdate(timestamp));
}) satisfies FixedUpdateFunction;

const draw = (() => {
  context.fillStyle = "lightblue";
  context.fillRect(0, 0, 500, 500);

  gameObjects.forEach((gameObject) => gameObject.draw(context));
}) satisfies DrawFunction;

const gameLoop = new GameLoop(update, fixedUpdate, draw);

gameLoop.start();
Input.initialize();
