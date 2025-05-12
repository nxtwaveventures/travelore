import { Collection, ObjectId } from 'mongodb'
import clientPromise from './mongodb'
import { Post, User, Destination } from './schema'

export class Repository<T extends { id: string }> {
    private collection: Promise<Collection>
    private collectionName: string

    constructor(collectionName: string) {
        this.collectionName = collectionName
        this.collection = this.initializeCollection()
    }

    private async initializeCollection(): Promise<Collection> {
        const client = await clientPromise
        const db = client.db('travelore')
        return db.collection(this.collectionName)
    }

    async findById(id: string): Promise<T | null> {
        const collection = await this.collection
        const result = await collection.findOne({ _id: new ObjectId(id) })
        if (!result) return null
        return this.mapToEntity(result)
    }

    async findAll(): Promise<T[]> {
        const collection = await this.collection
        const results = await collection.find({}).toArray()
        return results.map((result) => this.mapToEntity(result))
    }

    async create(entity: Omit<T, 'id'>): Promise<T> {
        const collection = await this.collection
        const result = await collection.insertOne({
            ...entity,
            createdAt: new Date(),
            updatedAt: new Date(),
        })
        return this.mapToEntity({
            ...entity,
            _id: result.insertedId,
        } as any)
    }

    async update(id: string, entity: Partial<T>): Promise<T | null> {
        const collection = await this.collection
        const result = await collection.findOneAndUpdate(
            { _id: new ObjectId(id) },
            {
                $set: {
                    ...entity,
                    updatedAt: new Date(),
                },
            },
            { returnDocument: 'after' }
        )
        if (!result) return null
        return this.mapToEntity(result)
    }

    async delete(id: string): Promise<boolean> {
        const collection = await this.collection
        const result = await collection.deleteOne({ _id: new ObjectId(id) })
        return result.deletedCount === 1
    }

    private mapToEntity(doc: any): T {
        const { _id, ...rest } = doc
        return {
            id: _id.toString(),
            ...rest,
        } as T
    }
}

export const PostRepository = new Repository<Post>('posts')
export const UserRepository = new Repository<User>('users')
export const DestinationRepository = new Repository<Destination>('destinations') 