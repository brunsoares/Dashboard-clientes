package io.github.brunsoares.clients.rest.dto;

import lombok.Data;
import lombok.NoArgsConstructor;
import org.apache.commons.lang3.StringUtils;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;

@Data
@NoArgsConstructor
public class ServiceDTO {

    private String description;
    private String price;
    private String date;
    private Integer clientID;

    public LocalDate convertToLocalDate(){
        return LocalDate.parse(getDate(), DateTimeFormatter.ofPattern("dd/MM/yyyy"));
    }

    public BigDecimal convertToBigDecimal(){
        if(StringUtils.isNotBlank(getPrice())) {
            String value = getPrice();
            value = value.replace(".", "").replace(",", ".");
            return new BigDecimal(value);
        } else{
            return new BigDecimal(0);
        }
    }
}
