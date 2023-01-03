export interface TaskModel {
    id: number;
    title: string;
    description: string;
    group: string;
    when: Date;
}

export interface TaskPayloadModel {
    title: string;
    description: string;
    group: string;
    when: Date;
}

