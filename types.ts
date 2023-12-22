import { Card, List } from "@prisma/client";
import { type } from "os";

export type ListWithCards = List & { cards: Card[] };
export type CardWithList = Card & { list: List };
