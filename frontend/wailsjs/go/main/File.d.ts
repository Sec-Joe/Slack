// Cynhyrchwyd y ffeil hon yn awtomatig. PEIDIWCH Â MODIWL
// This file is automatically generated. DO NOT EDIT
import {structs} from '../models';
import {main} from '../models';

export function CheckFileStat(arg1:string):Promise<boolean>;

export function DownloadLastestClient():Promise<structs.Status>;

export function FileDialog(arg1:string):Promise<string>;

export function GetLocalNaConfig():Promise<any>;

export function InitConfig():Promise<boolean>;

export function InitMemo(arg1:string,arg2:string):Promise<boolean>;

export function InsetGroupNavigation(arg1:structs.Navigation):Promise<boolean>;

export function InsetItemNavigation(arg1:string,arg2:structs.Children):Promise<boolean>;

export function IsMacOS():Promise<boolean>;

export function List(arg1:string):Promise<Array<string>>;

export function NetworkCardInfo():Promise<Array<string>>;

export function OpenFolder(arg1:string):Promise<string>;

export function OpenTerminal(arg1:string):Promise<string>;

export function Path(arg1:string):Promise<main.PathInfo>;

export function ReadFile(arg1:string):Promise<main.FileInfo>;

export function ReadLocalStore():Promise<{[key: string]: any}>;

export function ReadMemo(arg1:string):Promise<{[key: string]: string}>;

export function RemoveOldClient():Promise<void>;

export function RemoveOldConfig():Promise<void>;

export function Restart():Promise<void>;

export function RunApp(arg1:string,arg2:string,arg3:string):Promise<boolean>;

export function SaveDataToFile(arg1:any):Promise<boolean>;

export function SaveFile(arg1:string):Promise<string>;

export function SaveJsonFile(arg1:any):Promise<boolean>;

export function SaveNavigation(arg1:Array<structs.Navigation>):Promise<boolean>;

export function UpdatePocFile():Promise<string>;

export function UserHomeDir():Promise<string>;

export function WriteFile(arg1:string,arg2:string,arg3:string):Promise<boolean>;
