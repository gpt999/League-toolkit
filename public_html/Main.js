var slot = [];

function new_slot()
{
    to_slot(
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

function to_slot(ad_base, ad_bonus, ad_multi
, crit_chance, crit_damage
, pen_flat, pen_percent , reduction_flat, reduction_percent, target_resist) //store a saved total stats to one of the slots, also save some of the math portion for easier later use.
{
    var x = {};
    x.ad_base = ad_base;
    x.ad_bonus = ad_bonus;
    x.ad_multi = ad_multi;//ad multi only work on ad_bonus
    x.ad_total = (ad_bonus*ad_multi) + ad_base;
    
    x.crit_chance = crit_chance;
    x.crit_damage = crit_damage;//asume the extra crit damage, not the total, so adding an IE would mean 0.5
    x.multiplier_from_crit = math_crit_percent_increase(crit_chance, crit_damage);
    
    x.pen_flat = pen_flat;
    x.pen_percent = pen_percent;
    x.reduction_flat = reduction_flat;
    x.reduction_percent = reduction_percent;
    
    
    
    
    x.get_ad_base = function()
    {
      return this.ad_base;  
    };
    
    x.get_ad_bonus = function()
    {
        return this.ad_bonus;
    };
    
    x.get_ad_multi = function()
    {
        return this.ad_multi;
    };
    
    x.get_ad_total = function()
    {
      return this.ad_total;  
    };
    
    x.get_crit_chance = function()
    {
        return this.crit_chance;
    };
    
    x.get_crit_damage = function()
    {
        return this.crit_damage;
    };
    x.get_pen_flat = function()
    {
        return this.pen_flat;
    };
    x.get_pen_percent = function()
    {
        return this.pen_percent;
    };
    x.get_reduction_flat = function()
    {
        return this.reduction_flat;
    };
    x.get_reduction_percent = function()
    {
        return this.reduction_percent;
    };
    
    x.get_target_resist = function()
    {
        return x.target_resist;
    };
    x.get_target_resist_with_pen = function()
    {
        return x.target_resist_with_pen;
    };
    x.get_damage_after_pen = function()
    {
        return x.damage_after_pen;
    };
    
    x.get_multiplier_from_pen = function()
    {
        return x.multiplier_from_pen;
    };
    x.get_multiplier_from_crit = function()
    {
        return x.multiplier_from_crit;
    };
    
    x.get_dps = function()
    {
        return x.dps;
    };
    slot[slot.length] = x;
}
