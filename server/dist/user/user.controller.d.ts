import { UserService } from './user.service';
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    getUserProfile(id: number): Promise<{
        id: number;
        email: string;
        name: string;
        password: string;
        created_date: Date;
        updated_date: Date;
    }>;
}
