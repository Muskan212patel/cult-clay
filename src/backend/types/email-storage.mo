module {
  public type EmailSignup = {
    email : Text;
    timestamp : Int;
    source : Text;
  };

  public type AddEmailResult = {
    ok : Bool;
    message : Text;
  };
};
