export interface Race {
    raceName: string;
    Circuit: {
      circuitName: string;
      Location: {
        lat: string;
        long: string;
      }
    };
    Results: Array<{
      position: string;
      Driver: {
        givenName: string;
        familyName: string;
        code: string;
      };
      Constructor: {
        name: string;
      };
      FastestLap?: {
        Time: {
          time: string;
        };
      };
      points: string;
    }>;
  }
  
  export interface Standing {
    position: string;
    points: string;
    Driver?: {
      givenName: string;
      familyName: string;
      code: string;
    };
    Constructor?: {
      name: string;
    };
  }