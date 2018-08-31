exports.up = knex => {
    return knex.schema
        .createTable('medias', table => {
            table.increments('id').primary();
            table.string('name');
            table.string('url');
            table.integer('type');
        })
        .createTable('users', table => {
            table.increments('id').primary();
            table.string('full_name');
            table.string('email');
            table.string('contraseña');
            table
                .integer('profile_picture')
                .unsigned()
                .references('id')
                .inTable('medias')
                .onDelete('SET NULL')
        })
        .createTable('categories', table => {
            table.increments('id').primary();
            table.string('name');
            table
                .integer('parent_id')
                .unsigned()
                .references('id')
                .inTable('categories')
                .onDelete('Cascade');
        })
        .createTable('posts', table => {
            table.increments('id').primary();
            table
                .integer('publisher')
                .unsigned()
                .references('id')
                .inTable('users')
                .onDelete('SET NULL');
            table.string('title');
            table.string('description');
            table
                .integer('category_id')
                .unsigned()
                .references('id')
                .inTable('categories')
                .onDelete('Set NULL');
        })

        .createTable('categories_medias', table => {
            table.increments('id').primary();
            table
                .integer('category_id')
                .unsigned()
                .references('id')
                .inTable('categories')
                .onDelete('Cascade');
            table
                .integer('media_id')
                .unsigned()
                .references('id')
                .inTable('medias')
                .onDelete('Cascade');
        })
};

exports.down = knex => {
    return knex.schema
        .dropTableIfExists('users')
        .dropTableIfExists('categories')
        .dropTableIfExists('posts')
        .dropTableIfExists('medias')
        .dropTableIfExists('categories_medias');
};