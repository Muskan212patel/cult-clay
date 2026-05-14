import List "mo:core/List";
import Types "types/email-storage";
import EmailStorageApi "mixins/email-storage-api";
import Principal "mo:core/Principal";

actor self {
  let owner : Principal = Principal.fromActor(self);
  let signups = List.empty<Types.EmailSignup>();

  include EmailStorageApi(owner, signups);
};

