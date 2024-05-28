import { IPayload } from "@/types/payload";

/**
 * Класс, который хранит промежуточные данные о регистрации пользователя
 *
 */
class Profile {
  private name?: string;
  private sex?: "m" | "w";
  private sexPreference?: "m" | "w" | "*";
  private aboutMe?: string;

  setName = (name: string) => {
    this.name = name;
  };

  setSex = (sex: "m" | "w") => {
    this.sex = sex;
  };

  setSexPreference = (sexPreference: "m" | "w" | "*") => {
    this.sexPreference = sexPreference;
  };

  setAboutMe = (aboutMe: string) => {
    this.aboutMe = aboutMe;
  };

  insertIntoDatabase = () => {
    // TO-DO
  }
}

class ProfileManager {
  private profiles: Record<string, Profile> = {};

  private create = (userId: string) => {
    return (this.profiles[userId] = new Profile());
  };
}
