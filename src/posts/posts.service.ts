import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreatePostDto } from './dto/create-post.dto';
import { Post } from './posts.model';

@Injectable()
export class PostsService {
	constructor(@InjectModel(Post) private postRepository: typeof Post) {}

	async CreatePost(dto: CreatePostDto, image: any) {
		const fileName = 'asfas';
		const post = await this.postRepository.create({
			...dto,
			image: fileName,
		});
		return post;
	}
}
