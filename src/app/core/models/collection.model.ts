import { Topic } from "./topic.model";

export interface Collection {

    id: number | null;
    name: string | null;
    description: string | null;
    topics: Topic[] | null;

}
