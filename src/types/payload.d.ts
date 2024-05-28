export namespace IPayload {
  export interface Start {
    /**
     *
     */
    isReady: true;
  }
  export interface Step1 {
    /**
     *
     */
    name: string;
  }
  export interface Step2 {
    /**
     *
     */
    sex: "m" | "w";
  }
  export interface Step3 {
    /**
     *
     */
    sexPreference: "m" | "w" | "*";
  }
  export interface Step4 {
    /**
     *
     */
    aboutMe?: string;
  }

  export interface UserProfile extends Partial<Step1 | Step2 | Step3 | Step4> {}
}
