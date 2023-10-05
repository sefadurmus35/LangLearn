import { CreateUserDto } from '../user/dto/user.dto';
import { UserService } from 'src/user/user.service';
import { LoginDto } from './dto/auth.dto';
import { AuthService } from './auth.service';
export declare class AuthController {
    private userService;
    private authService;
    constructor(userService: UserService, authService: AuthService);
    registerUser(dto: CreateUserDto): Promise<{
        id: number;
        email: string;
        name: string;
        created_date: Date;
        updated_date: Date;
    }>;
    login(dto: LoginDto): Promise<{
        user: {
            id: number;
            email: string;
            name: string;
            created_date: Date;
            updated_date: Date;
        };
        backendTokens: {
            accessToken: string;
            refreshToken: string;
            expiresIn: number;
        };
    }>;
    refreshToken(req: any): Promise<{
        accessToken: string;
        refreshToken: string;
        expiresIn: number;
    }>;
}
