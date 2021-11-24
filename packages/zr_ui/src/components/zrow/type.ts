export enum JustifyDirection{
    Start="start",
    End="end",
    Center="center",
    SpaceAround="around",
    SpaceBetween="between"
}
export enum AlignDirection{
    Start="start",
    End="end",
    Center="center",
}
export interface PropsType {
   gutter?: number,
   type?:"flex"|"",
   justify:JustifyDirection,
   align:AlignDirection,
   tag:string
}
