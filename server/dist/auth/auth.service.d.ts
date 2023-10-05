import { LoginDto } from './dto/auth.dto';
import { UserService } from 'src/user/user.service';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private userService;
    private jwtService;
    constructor(userService: UserService, jwtService: JwtService);
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
    validateUser(dto: LoginDto): Promise<{
        id: number;
        email: string;
        name: string;
        created_date: Date;
        updated_date: Date;
    }>;
    refreshToken(user: any): Promise<{
        accessToken: string;
        refreshToken: string;
        expiresIn: number;
    }>;
}
