import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createImages1602638565822 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "images",
        columns: [
          {
            name: "id",
            type: "integer",
            unsigned: true,
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "increment",
          },
          {
            name: "path",
            type: "varchar",
          },
          {
            name: "orphanage_id",
            type: "integer",
          },
        ],
        foreignKeys: [
          {
            name: "imageOrphanage",
            columnNames: ["orphanage_id"],
            referencedTableName: "orphanages",
            referencedColumnNames: ["id"],

            // id do orfanato alterado e consequentemente nas imagens relacionadas a ele
            onUpdate: "CASCADE", // o que acontece com as imagens caso o id do orfanato seja atualizado

            // orfanato é deletado  e consequentemente as imagens relacionadas a ele
            onDelete: "CASCADE", // o que acontece com as imagens caso o id do orfanato seja deletado
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("images");
  }
}
