import Debug "mo:core/Debug";
import List "mo:core/List";
import Types "../types/email-storage";

mixin (owner : Principal, signups : List.List<Types.EmailSignup>) {
  public func addEmail(email : Text, source : Text) : async Types.AddEmailResult {
    Debug.todo();
  };

  public shared ({ caller }) func getEmails() : async [Types.EmailSignup] {
    Debug.todo();
  };

  public query func getEmailCount() : async Nat {
    Debug.todo();
  };
};
