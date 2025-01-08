import { Migration } from '@mikro-orm/migrations';

export class Migration20250108035923 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table if not exists "flash" ("id" text not null, "heading" text not null, "created_at" timestamptz not null default now(), "updated_at" timestamptz not null default now(), "deleted_at" timestamptz null, constraint "flash_pkey" primary key ("id"));');
    this.addSql('CREATE INDEX IF NOT EXISTS "IDX_flash_deleted_at" ON "flash" (deleted_at) WHERE deleted_at IS NULL;');
  }

  async down(): Promise<void> {
    this.addSql('drop table if exists "flash" cascade;');
  }

}
