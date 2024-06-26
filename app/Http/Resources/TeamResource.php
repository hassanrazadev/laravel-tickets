<?php

namespace App\Http\Resources;

use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class TeamResource extends JsonResource {

    public static $wrap = null;

    public function toArray(Request $request): array {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'description' => $this->description,
            'manager_id' => $this->manager_id,
            'manager' => $this->manager,
            'created_at' => Carbon::make($this->created_at)->format('Y-m-d H:i:s'),
        ];
    }
}
