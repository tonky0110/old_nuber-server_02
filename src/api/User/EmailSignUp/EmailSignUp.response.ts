import { EmailSignUpMutationArgs, EmailSignUpResponse } from "../../../types/graph";
import { Resolvers } from "../../../types/resolvers";
import User from "../../../entities/User";

const resolvers: Resolvers = {
    Mutation: {
        EmailSignUp: async(
            _, 
            args:EmailSignUpMutationArgs
        ): Promise<EmailSignUpResponse> => {
            const  { email } = args;
            try {
                const existUser = await User.findOne({ email });
                if(existUser) {
                    return {
                        ok: false,
                        error: "You should log in instead.",
                        token: null
                    };
                }else {
                    const newUser = await User.create({ ...args }).save();
                    return {
                        ok: true,
                        error: null,
                        token: "Coming soon!"
                    }
                }
            }catch(error) {
                return {
                    ok: false,
                    error: error.message,
                    token: null
                }
            }
        }
    }
};

export default resolvers;