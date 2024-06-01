<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\SoftDeletes;

class Comment extends Model {
    use SoftDeletes;

    protected $fillable = [
        'message',
        'user_id',
        'ticket_id',
    ];

    /**
     * @return BelongsTo
     */
    public function user(): BelongsTo {
        return $this->belongsTo(User::class);
    }

    /**
     * @return BelongsTo
     */
    public function ticket(): BelongsTo {
        return $this->belongsTo(Ticket::class);
    }
}
