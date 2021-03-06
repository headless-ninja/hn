export interface Entity {
  __hn?: {
    view_modes: {
      [viewMode: string]: boolean;
    };
    entity: {
      type: string;
      bundle: string;
    };
    url: string;
    status?: number;
  };
}

export interface HnData {
  data: {
    [uuid: string]: Entity | any;
  };
  paths: {
    [path: string]: string;
  };
  __hn: {
    request?: {
      user?: string;
      token?: string;
    };
  };
}

type HnServerResponse = Partial<HnData>;

export default HnServerResponse;
