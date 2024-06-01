<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Faker\Factory as Faker;

class UsersTableSeeder extends Seeder {
    public function run(): void {

        $faker = Faker::create();

        $users = [
            ['name' => 'Admin User', 'email' => 'admin@example.com', 'password' => '123789', 'role' => 'admin'],
            ['name' => $faker->name, 'email' => 'manager1@example.com', 'password' => 'password', 'role' => 'manager'],
            ['name' => $faker->name, 'email' => 'manager2@example.com', 'password' => 'password', 'role' => 'manager'],
            ['name' => $faker->name, 'email' => 'manager3@example.com', 'password' => 'password', 'role' => 'manager'],
            ['name' => $faker->name, 'email' => 'manager4@example.com', 'password' => 'password', 'role' => 'manager'],
            ['name' => $faker->name, 'email' => 'teamlead1@example.com', 'password' => 'password', 'role' => 'team_lead'],
            ['name' => $faker->name, 'email' => 'teamlead2@example.com', 'password' => 'password', 'role' => 'team_lead'],
            ['name' => $faker->name, 'email' => 'teamlead3@example.com', 'password' => 'password', 'role' => 'team_lead'],
            ['name' => $faker->name, 'email' => 'teamlead4@example.com', 'password' => 'password', 'role' => 'team_lead'],
            ['name' => $faker->name, 'email' => 'teammember1@example.com', 'password' => 'password', 'role' => 'team_member'],
            ['name' => $faker->name, 'email' => 'teammember2@example.com', 'password' => 'password', 'role' => 'team_member'],
            ['name' => $faker->name, 'email' => 'teammember3@example.com', 'password' => 'password', 'role' => 'team_member'],
            ['name' => $faker->name, 'email' => 'teammember4@example.com', 'password' => 'password', 'role' => 'team_member'],
            ['name' => $faker->name, 'email' => 'customer1@example.com', 'password' => 'password', 'role' => 'customer'],
            ['name' => $faker->name, 'email' => 'customer2@example.com', 'password' => 'password', 'role' => 'customer'],
        ];

        foreach ($users as $user) {
            User::create($user);
        }
    }
}
