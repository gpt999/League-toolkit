var slot_stats = [];

function slot_stats()
{
    slot_stats_new(
            parseFloat(document.getElementById("ad_base").value),
            parseFloat(document.getElementById("ad_bonus").value),
            parseFloat(document.getElementById("ad_multi").value),
            
            parseFloat(document.getElementById("crit_chance").value),
            parseFloat(document.getElementById("crit_damage").value),
            
            parseFloat(document.getElementById("pen_flat").value),
            parseFloat(document.getElementById("pen_percent").value),
            parseFloat(document.getElementById("reduction_flat").value),
            parseFloat(document.getElementById("reduction_percent").value)
            );
}

function slot_stats_new(ad_base, ad_bonus, ad_multi
, crit_chance, crit_damage
, pen_flat, pen_percent , reduction_flat, reduction_percent) //store a saved total stats to one of the slots, also save some of the math portion for easier later use.
{
    var x = {};
    //base stats
    x.ad_base = ad_base;
    x.ad_bonus = ad_bonus;
    x.ad_multi = ad_multi;//ad multi only work on ad_bonus
    x.ad_total = (ad_bonus*ad_multi) + ad_base;
    
    x.crit_chance = crit_chance;
    x.crit_damage = crit_damage;//asume the extra crit damage, not the total, so adding an IE would mean 0.5
    
    
    x.pen_flat = pen_flat;
    x.pen_percent = pen_percent;
    x.reduction_flat = reduction_flat;
    x.reduction_percent = reduction_percent;
    
    //math stuff below
    x.multiplier_from_crit = math_crit_percent_increase(crit_chance, crit_damage);
    
    
    
    x.get = {
        ad_base:function(){return x.ad_base;},
        ad_bonus:function(){return x.ad_bonus;},
        ad_multi:function(){return x.ad_multi;},
        ad_total:function(){return x.ad_total;},
        
        crit_chance:function(){return this.crit_chance;},
        crit_damage:function(){return this.crit_damage;},
        
        pen_flat:function(){return this.pen_flat;},
        pen_percent:function(){return this.pen_percent;},
        reduction_flat:function(){return this.reduction_flat;},
        reduction_percent:function(){return this.reduction_percent;}
    };

    slot_stats.push(x);
}
