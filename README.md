The purpose of this package is to have the ability to sanitize inputs and have them type casted for typescript. The inspiration came from using joi in a typescript project to sanitize incoming requests. The issue I found was that although joi sanitizes things, the results are not typed. In order to use my sanitized inputs I would then force cast in order to use with typescript. 

I'm a noob with javascript (as my code shows) and rely on typescript to make sense of things, I made this tool for use in my projects to make sanitizing typed inputs a bit easier. 

Example: 

```typescript
import sani from "./sanitype";

const CreateUserSchema = (obj: any) => {
  return {
    username: sani
      .string(obj.user_name)
      .regex(/^[a-zA-Z][a-zA-Z\\s]*$/)
      .min(2)
      .max(30)
      .value(),
    password: sani
      .string(obj.password)
      .isAlphanumeric()
      .min(6)
      .max(100)
      .value(),
    age: sani
      .number(obj.age)
      .isInteger()
      .min(18)
      .value(),
    referral: sani.optionalString(obj.referral_source).value()
  };
};

const loginUser = (req: Request, res: Response) => {
  try {
    const { username, password, age, referral } = CreateUserSchema(req.body);
    // all our validations are done and everything is typed
    // username & password are of type string
    // age is of type number
    // referral is of type string if it exists
    
    // now we can easily call hashPassword with our sanitized password 
    const hashedPass = hashPassword(password);
    if (referral) {
      // do whatever with it
    }
  } catch (error) {
    // can see our sanitizing errors here
  }
};

const hashPassword = (password: string): string => {
  // do some hashing
  return hashedPassword;
};
```
