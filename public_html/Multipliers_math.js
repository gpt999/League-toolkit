
function math_crit_percent_increase(crit_chance, crit_damage) //expect the data to be in the format of a decimal fraction (ex 0.2 = 20%), calculate the average percentage increase of dps from crit damage
{
    if (crit_chance >= 1.0)
    {
        crit_chance = 1.0;
    }
    return crit_chance*(crit_damage +1);
}

function math_resist_with_pen (flat_pen, percent_pen, flat_reduction, percent_reduction, target_resist) //expect the data to be in the format of a decimal fraction (ex 0.2 = 20%), calculate the damage done after armor, in percent
{
    var resist = target_resist;
    
    resist -= flat_reduction;
    
    if (resist >= 0)
    {
        resist *= (1-percent_reduction); //check, percent armor pen stack multiplicatively, so the formula is not right with multiple % pen items.
        resist *= (1-percent_pen);
        resist -= flat_pen;
        if (resist <= 0)
        {
            resist = 0;
        }
    }
    
    return resist;
}

function math_pen_percent_done(target_resist)
{
    if (target_resist >= 0)
    {
        return 100/(100+target_resist);
    }
    else
    {
        return 2- (100/(100-target_resist));
    }
}
