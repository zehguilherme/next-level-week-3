import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createOrphanages1602604822899 implements MigrationInterface {
  // Realiza alterações
  /**
   * Criar tabela
   * Criar novo campo
   * Deletar um campo
   */
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "orphanages",
        columns: [
          {
            name: "id",
            type: "integer",
            unsigned: true, // não pode ser negativo
            isPrimary: true,
            isGenerated: true, // coluna gerada automaticamente
            generationStrategy: "increment",
          },
          {
            name: "name",
            type: "varchar",
          },
          {
            name: "latitude",
            type: "decimal",
            scale: 10,
            precision: 2,
          },
          {
            name: "longitude",
            type: "decimal",
            scale: 10,
            precision: 2,
          },
          {
            name: "about",
            type: "text",
          },
          {
            name: "instructions",
            type: "text",
          },
          {
            name: "opening_hours",
            type: "varchar",
          },
          {
            name: "open_on_weekends",
            type: "boolean",
            default: false,
          },
        ],
      })
    );
  }

  // Desfaz o que foi feito no método up
  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("orphanages");
  }
}
