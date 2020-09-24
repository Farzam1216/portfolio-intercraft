<?php

use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $data = [
            [
                'name' => 'Ghazi',
                'email' => 'ghaziislam3@gmail.com',
                'mobile' => 3024024838,
                'password' => Hash::make("Intercraftsol"),
                'role' => 'admin',
            ]
        ];
        DB::table('users')->insert($data);
    }
}
