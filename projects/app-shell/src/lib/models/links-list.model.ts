export interface SideBar{
    [key: string]: Links[];
}

export class Links {
    linkName: string;
    linkUrl: string;
}
