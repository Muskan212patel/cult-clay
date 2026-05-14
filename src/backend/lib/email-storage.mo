import Debug "mo:core/Debug";
import List "mo:core/List";
import Types "../types/email-storage";

module {
  public func isValidEmail(email : Text) : Bool {
    Debug.todo();
  };

  public func addEmail(
    signups : List.List<Types.EmailSignup>,
    email : Text,
    source : Text,
  ) : Types.AddEmailResult {
    Debug.todo();
  };

  public func getEmails(signups : List.List<Types.EmailSignup>) : [Types.EmailSignup] {
    Debug.todo();
  };

  public func getEmailCount(signups : List.List<Types.EmailSignup>) : Nat {
    Debug.todo();
  };
};
