<?php

use App\User;
use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(User::class)->create([
            'name' => 'admin',
            'email' => 'admin@admin.com',
        ]);

        if (env('APP_ENV') == 'local') {
            factory(User::class)->create([
                'name' => 'guest',
                'email' => 'guest@guest.com',
            ]);
        }
    }
}
