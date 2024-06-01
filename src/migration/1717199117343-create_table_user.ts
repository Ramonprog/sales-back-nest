import { MigrationInterface, QueryRunner } from 'typeorm'

export class CreateTableUser1717199117343 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
               CREATE TABLE public.user (
                id SERIAL PRIMARY KEY,
                name VARCHAR NOT NULL,
                email VARCHAR NOT NULL,
                type_user INTEGER NOT NULL,
                cpf VARCHAR NOT NULL,
                phone VARCHAR NOT NULL,
                password VARCHAR NOT NULL,
                created_at TIMESTAMP DEFAULT now() NOT NULL,
                updated_at TIMESTAMP DEFAULT now() NOT NULL
            )
        `)
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
            DROP TABLE public.user
        `)
  }
}
