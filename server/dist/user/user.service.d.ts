import { PrismaService } from '../prisma.service';
import { CreateUserDto } from './dto/user.dto';
export declare class UserService {
    private prisma;
    constructor(prisma: PrismaService);
    create(dto: CreateUserDto): Promise<{
        id: number;
        email: string;
        name: string;
        created_date: Date;
        updated_date: Date;
    }>;
    findByEmail(email: string): Promise<{
        id: number;
        email: string;
        name: string;
        password: string;
        created_date: Date;
        updated_date: Date;
    }>;
    findById(id: number): Promise<{
        id: number;
        email: string;
        name: string;
        password: string;
        created_date: Date;
        updated_date: Date;
    }>;
}
